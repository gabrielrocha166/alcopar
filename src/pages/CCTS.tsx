import { useState, useEffect } from 'react';
import { Search, Download, Eye, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface CCTSDocument {
  id: string;
  title: string;
  sindicato: string;
  ano: number;
  description: string;
  pdf_url: string;
  created_at: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function CCTS() {
  const [documents, setDocuments] = useState<CCTSDocument[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<CCTSDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSindicato, setSelectedSindicato] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [groupBy, setGroupBy] = useState<'year' | 'sindicato'>('year');
  const [sindicatos, setSindicatos] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('ccts_documents')
        .select('*')
        .order('ano', { ascending: false })
        .order('sindicato', { ascending: true });

      if (error) throw error;

      const docs = data || [];
      setDocuments(docs);

      const uniqueSindicatos = [...new Set(docs.map(d => d.sindicato))].sort();
      const uniqueYears = [...new Set(docs.map(d => d.ano))].sort((a, b) => b - a);

      setSindicatos(uniqueSindicatos);
      setYears(uniqueYears);
      applyFilters(docs, '', null, null);
    } catch (error) {
      console.error('Error fetching CCTS documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = (docs: CCTSDocument[], search: string, sindicato: string | null, year: number | null) => {
    let filtered = docs;

    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(lowerSearch) ||
        doc.sindicato.toLowerCase().includes(lowerSearch) ||
        doc.description?.toLowerCase().includes(lowerSearch)
      );
    }

    if (sindicato) {
      filtered = filtered.filter(doc => doc.sindicato === sindicato);
    }

    if (year) {
      filtered = filtered.filter(doc => doc.ano === year);
    }

    setFilteredDocuments(filtered);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    applyFilters(documents, search, selectedSindicato, selectedYear);
  };

  const handleSindicatoFilter = (sindicato: string) => {
    const newSindicato = selectedSindicato === sindicato ? null : sindicato;
    setSelectedSindicato(newSindicato);
    applyFilters(documents, searchTerm, newSindicato, selectedYear);
  };

  const handleYearFilter = (year: number) => {
    const newYear = selectedYear === year ? null : year;
    setSelectedYear(newYear);
    applyFilters(documents, searchTerm, selectedSindicato, newYear);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSindicato(null);
    setSelectedYear(null);
    applyFilters(documents, '', null, null);
  };

  const groupedDocuments = () => {
    if (groupBy === 'year') {
      const grouped: { [key: number]: CCTSDocument[] } = {};
      filteredDocuments.forEach(doc => {
        if (!grouped[doc.ano]) grouped[doc.ano] = [];
        grouped[doc.ano].push(doc);
      });
      return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
    } else {
      const grouped: { [key: string]: CCTSDocument[] } = {};
      filteredDocuments.forEach(doc => {
        if (!grouped[doc.sindicato]) grouped[doc.sindicato] = [];
        grouped[doc.sindicato].push(doc);
      });
      return Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0]));
    }
  };

  const hasActiveFilters = Boolean(searchTerm || selectedSindicato || selectedYear);

  return (
    <div>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            Convenções Coletivas de Trabalho
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Acesse os acordos coletivos firmados entre sindicatos e o setor produtivo. Documentos institucionais que regulam relações laborais e benefícios dos colaboradores.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por palavra-chave, sindicato ou ano..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Filtrar por Sindicato</h3>
                <div className="flex flex-wrap gap-2">
                  {sindicatos.map(sindicato => (
                    <button
                      key={sindicato}
                      onClick={() => handleSindicatoFilter(sindicato)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedSindicato === sindicato
                          ? 'bg-green-600 text-white ring-2 ring-green-400 ring-offset-2'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {sindicato}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Filtrar por Ano</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => handleYearFilter(year)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedYear === year
                          ? 'bg-green-600 text-white ring-2 ring-green-400 ring-offset-2'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Exibindo <span className="font-semibold text-gray-900">{filteredDocuments.length}</span> documento{filteredDocuments.length !== 1 ? 's' : ''}
                </p>
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                  Limpar filtros
                </button>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => setGroupBy('year')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  groupBy === 'year'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Agrupar por Ano
              </button>
              <button
                onClick={() => setGroupBy('sindicato')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  groupBy === 'sindicato'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Agrupar por Sindicato
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Carregando documentos...</p>
            </div>
          ) : filteredDocuments.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhuma convenção encontrada
                </h3>
                <p className="text-gray-600 mb-4">
                  Nenhuma convenção encontrada para os filtros selecionados
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <X className="h-4 w-4" />
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {groupedDocuments().map(([groupKey, docs]) => (
                <div key={groupKey}>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-green-200">
                    <div className="h-1 w-1 bg-green-600 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {groupBy === 'year' ? `Ano ${groupKey}` : groupKey}
                    </h2>
                    <span className="ml-auto text-sm text-gray-600">
                      {docs.length} documento{docs.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {docs.map(doc => (
                      <div
                        key={doc.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
                      >
                        <div className="mb-4">
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                            {doc.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {doc.sindicato}
                            </span>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                              {doc.ano}
                            </span>
                          </div>
                          {doc.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {doc.description}
                            </p>
                          )}
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                          <button
                            onClick={() => {
                              if (doc.pdf_url) {
                                window.open(doc.pdf_url, '_blank');
                              }
                            }}
                            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!doc.pdf_url}
                          >
                            <Eye className="h-4 w-4" />
                            Visualizar
                          </button>
                          <a
                            href={doc.pdf_url}
                            download={`${doc.title}.pdf`}
                            onClick={(e) => {
                              if (!doc.pdf_url) {
                                e.preventDefault();
                              }
                            }}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sobre as Convenções Coletivas
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As Convenções Coletivas de Trabalho (CCTS) são acordos formais entre sindicatos e empresas que regulam as relações laborais, estabelecendo direitos, deveres e benefícios dos colaboradores do setor sucroenergético.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Estes documentos refletem o compromisso da ALCOPAR em manter relações harmoniosas com seus colaboradores, garantindo condições dignas de trabalho e benefícios compatíveis com o mercado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
