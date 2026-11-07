import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import ConfirmationModal from '@components/ConfirmationModal/ConfirmationModal';
import { Button, IconButton, Tag } from '@components/Layout/Layout';
import { useFollowLink } from '@components/Toast/Toast';
import { nodeName } from '@context/GameMessagesContext';
import { findCommand } from '@utils/commands';
import { formatTimestamp } from '@utils/time';

import CY_CITY_COMMANDS from '../../RetComDevice/commands/cy_city';

import {
  Card,
  Meta,
  MetaText,
  From,
  Controls,
  Body,
  NodeLine,
  NodeName,
  NodePath,
  NodeActions,
  Missing,
} from './NoteCard.styles';

/**
 * A shared RetCom node in the feed: who shared it, the node, whether it
 * was shared unlocked, and a link to it in RetCom. The link is checked
 * against the current tree, so a node renamed since it was shared shows
 * as missing instead of linking nowhere.
 */
export default function NodeShareCard({ entry, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const follow = useFollowLink();

  const exists = Boolean(findCommand(CY_CITY_COMMANDS, entry.path));
  const parents = entry.path.split('/').slice(0, -1).join(' / ');

  return (
    <Card data-kind={entry.mine ? undefined : 'shared'}>
      <Meta>
        <MetaText>
          {entry.mine ? <From>You</From> : entry.from ? <From>{entry.from}</From> : <From data-anon="true">anonymous</From>}
          <span>shared a node</span>
          <span>{formatTimestamp(entry.createdAt)}</span>
        </MetaText>

        {onDelete && (
          <Controls>
            <IconButton
              type="button"
              data-variant="danger"
              onClick={() => setConfirmDelete(true)}
              aria-label="Remove from your feed"
              title="Remove from your feed"
            >
              <DeleteIcon style={{ fontSize: 16 }} />
            </IconButton>
          </Controls>
        )}
      </Meta>

      <Body as="div">
        <NodeLine>
          <NodeName>{nodeName(entry.path)}</NodeName>
          <Tag data-tone={entry.unlocked ? undefined : 'highlight'}>
            {entry.unlocked ? 'Unlocked' : 'Locked'}
          </Tag>
        </NodeLine>
        {parents && <NodePath>{parents}</NodePath>}

        <NodeActions>
          {exists ? (
            <Button type="button" onClick={() => follow({ to: '/retcom', focusPath: entry.path })}>
              <OpenInNewIcon style={{ fontSize: 15 }} />
              Open in RetCom
            </Button>
          ) : (
            <Missing>This node no longer exists.</Missing>
          )}
        </NodeActions>
      </Body>

      <ConfirmationModal
        open={confirmDelete}
        title="Remove Shared Node"
        message="Remove this node from your feed? This only affects your view, not your unlocks."
        confirmLabel="Remove"
        onConfirm={() => {
          setConfirmDelete(false);
          onDelete?.(entry.id);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </Card>
  );
}
