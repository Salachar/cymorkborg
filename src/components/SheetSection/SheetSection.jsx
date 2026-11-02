import { useState } from 'react';

import EditDialog, { EditButton } from '@components/EditDialog/EditDialog';

import { Section, Head, Title, HeadActions } from './SheetSection.styles';

/**
 * A character sheet section: the play view, with editing behind a pencil.
 *
 *   <SheetSection
 *     id="sheet-stats"                 jump target
 *     title="Abilities"
 *     edit={<StatsEditor ... />}       dialog contents; omit for no pencil
 *     editWidth="48rem"                optional dialog width
 *     actions={...}                    optional status/controls by the pencil
 *   >
 *     ...play view...
 *   </SheetSection>
 *
 * The section owns the dialog (titled "Edit <title>"), so each section
 * only supplies what to edit. Edit rules are the EditDialog's: changes
 * apply immediately, Done closes.
 */
export default function SheetSection({
  id,
  title,
  edit = null,
  editWidth,
  actions = null,
  children,
}) {
  const [editing, setEditing] = useState(false);

  return (
    <Section id={id}>
      <Head>
        <Title>{title}</Title>
        {(actions || edit) && (
          <HeadActions>
            {actions}
            {edit && <EditButton label={title} onClick={() => setEditing(true)} />}
          </HeadActions>
        )}
      </Head>

      {children}

      {edit && (
        <EditDialog
          open={editing}
          title={`Edit ${title}`}
          maxWidth={editWidth}
          onClose={() => setEditing(false)}
        >
          {edit}
        </EditDialog>
      )}
    </Section>
  );
}
