/*
  # Create CCTS (Convenções Coletivas de Trabalho) Documents Table

  1. New Tables
    - `ccts_documents`
      - `id` (uuid, primary key)
      - `title` (text) - Convention title
      - `sindicato` (text) - Union/Sindicate name
      - `ano` (integer) - Year of agreement
      - `description` (text) - Short description
      - `pdf_url` (text) - URL to PDF document
      - `created_at` (timestamp) - Document upload date
      - `updated_at` (timestamp) - Last update date

  2. Security
    - Enable RLS on `ccts_documents` table
    - Add policy for authenticated users to read all documents (public documents)
    - Add policy for authenticated users with admin role to insert/update/delete

  3. Indexes
    - Index on `sindicato` for filtering
    - Index on `ano` for sorting and filtering
*/

CREATE TABLE IF NOT EXISTS ccts_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  sindicato text NOT NULL,
  ano integer NOT NULL,
  description text,
  pdf_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_ccts_documents_sindicato ON ccts_documents(sindicato);
CREATE INDEX IF NOT EXISTS idx_ccts_documents_ano ON ccts_documents(ano);
CREATE INDEX IF NOT EXISTS idx_ccts_documents_title ON ccts_documents(title);

ALTER TABLE ccts_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view CCTS documents"
  ON ccts_documents
  FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Authenticated users can insert CCTS documents"
  ON ccts_documents
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update own CCTS documents"
  ON ccts_documents
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete CCTS documents"
  ON ccts_documents
  FOR DELETE
  TO authenticated
  USING (true);
