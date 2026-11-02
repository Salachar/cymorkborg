import { Banner, Brand, Kicker, Name, Tagline, FinePrint } from './MarketBanner.styles';

// G/M/T runs marketing and luxury wares in Cy (corps index). A corporate
// storefront suits Rule #00: you shop from the enemy.
export default function MarketBanner() {
  return (
    <Banner>
      <Brand>
        <Kicker>G/M/T // Verified storefront</Kicker>
        <Name>NetMarket</Name>
        <Tagline>Everything delivered. Everything tracked.</Tagline>
      </Brand>

      <FinePrint aria-hidden="true">
        <div>All sales final</div>
        <div>Drone delivery in 15 min*</div>
        <div>*Where the drones still fly</div>
      </FinePrint>
    </Banner>
  );
}
