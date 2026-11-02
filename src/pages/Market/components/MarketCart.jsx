import CloseIcon from '@mui/icons-material/Close';

import { IconButton } from '@components/Layout/Layout';

import {
  CartStack,
  Panel,
  PanelHeader,
  PanelTitle,
  Count,
  PanelBody,
  Empty,
  CartItems,
  CartItem,
  CartItemMain,
  CartItemName,
  CartItemMeta,
  TotalRow,
  TotalLabel,
  TotalValue,
  Shortfall,
  CartActions,
  FullButton,
  Credits,
  CreditsLabel,
  CreditsValue,
} from './MarketCart.styles';

function formatCost(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M¤`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}k¤`;
  return `${value}¤`;
}

// "1.5k¤" -> 1500. Unchanged from the original cart.
function parseCost(costStr = '0¤') {
  const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);
  if (!match) return 0;
  const raw = match[1];
  if (raw.includes('k')) return parseFloat(raw) * 1000;
  if (raw.includes('M')) return parseFloat(raw) * 1000000;
  return parseFloat(raw);
}

export default function MarketCart({
  character = null,
  allEntries = {},
  onCheckout = () => {},
  onAddFree = () => {},
  onClear = () => {},
  onRemoveItem = () => {},
}) {
  if (!character) return null;

  const cartItems = character.getCartItems();
  const total = character.getCartTotal(allEntries);
  const isEmpty = cartItems.length === 0;
  const canAfford = character.credits >= total;

  return (
    <CartStack>
      <Panel>
        <PanelHeader>
          <PanelTitle>Cart</PanelTitle>
          {!isEmpty && (
            <Count>
              {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
            </Count>
          )}
        </PanelHeader>

        <PanelBody>
          {isEmpty ? (
            <Empty>Cart is empty</Empty>
          ) : (
            <CartItems>
              {cartItems.map(({ section, itemId, quantity }) => {
                const entry = (allEntries[section] || []).find((e) => (e.id || e.label) === itemId);
                if (!entry) return null;

                return (
                  <CartItem key={`${section}_${itemId}`}>
                    <CartItemMain>
                      <CartItemName>{entry.label || itemId}</CartItemName>
                      <CartItemMeta>
                        <span>×{quantity}</span>
                        <span>{formatCost(parseCost(entry.cost) * quantity)}</span>
                      </CartItemMeta>
                    </CartItemMain>
                    <IconButton
                      type="button"
                      onClick={() => onRemoveItem(section, entry)}
                      aria-label={`Remove ${entry.label || itemId} from cart`}
                      title="Remove from cart"
                    >
                      <CloseIcon style={{ fontSize: 16 }} />
                    </IconButton>
                  </CartItem>
                );
              })}
            </CartItems>
          )}

          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{formatCost(total)}</TotalValue>
          </TotalRow>

          {!canAfford && !isEmpty && (
            <Shortfall>
              Need <strong>{formatCost(total - character.credits)}</strong> more
            </Shortfall>
          )}

          <CartActions>
            <FullButton
              type="button"
              data-variant="primary"
              onClick={onCheckout}
              disabled={!canAfford || isEmpty}
            >
              Checkout
            </FullButton>
            <FullButton type="button" onClick={onAddFree} disabled={isEmpty}>
              Add free
            </FullButton>
            <FullButton type="button" onClick={onClear} disabled={isEmpty}>
              Clear cart
            </FullButton>
          </CartActions>
        </PanelBody>
      </Panel>

      <Credits>
        <CreditsLabel>Available credits</CreditsLabel>
        <CreditsValue>{formatCost(character.credits)}</CreditsValue>
      </Credits>
    </CartStack>
  );
}
