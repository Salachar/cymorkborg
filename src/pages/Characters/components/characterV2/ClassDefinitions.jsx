import { Directory, Tag } from '@components/Layout/Layout';

/**
 * Term / description list for class definitions (Class Uniques, the
 * Chemist's RV, ...). Entries: [{ id?, label, description, applied? }].
 * "Applied" marks uniques the app applies automatically (e.g. stat
 * adjustments).
 */
export default function ClassDefinitions({ entries = [] }) {
  if (!entries.length) return null;

  const items = entries.map((entry, index) => ({
    id: entry.id || `${entry.label}_${index}`,
    label: entry.applied ? (
      <>
        {entry.label} <Tag>Applied</Tag>
      </>
    ) : (
      entry.label
    ),
    description: entry.description,
  }));

  return <Directory items={items} labelWidth="12rem" />;
}
