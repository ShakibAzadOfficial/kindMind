import Image from 'next/image';
import Link from 'next/link';
import logo from '../logo/ShaikLamisaLMHC.webp';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Lamisa', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insurance & Fees', href: '/insurance-fees' },
  { label: 'Contact', href: '/intake', emphasized: true },
];

const locations = [
  { label: 'Brooklyn, NY', href: '/bengali-therapist-brooklyn-ny' },
  { label: 'West Orange, NJ', href: '/bengali-therapist-new-jersey' },
];

export default function SiteHeader({ subtitle }) {
  return (
    <header className="topbar siteHeader">
      <Link className="brand" href="/" aria-label="KindMind Counseling home">
        <Image
          className="brandLogo"
          src={logo}
          alt="Shaik Lamisa LMHC logo"
          width={182}
          height={182}
          priority
        />
        <div>
          <p className="eyebrow">Lamisa Shaik, LMHC</p>
          <p className="subtle">{subtitle}</p>
        </div>
      </Link>
      <nav className="siteNav" aria-label="Primary navigation">
        {navigation.slice(0, 3).map((item) => (
          <Link className="siteNavLink" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <details className="locationNav">
          <summary className="siteNavLink">
            Locations <span aria-hidden="true">▾</span>
          </summary>
          <div className="locationMenu">
            {locations.map((location) => (
              <Link href={location.href} key={location.href}>
                {location.label}
              </Link>
            ))}
          </div>
        </details>
        {navigation.slice(3).map((item) => (
          <Link
            className={`siteNavLink${item.emphasized ? ' emphasized' : ''}`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
