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

const resources = [
  { label: 'Anxiety therapy', href: '/anxiety-therapy' },
  { label: 'ADHD therapy', href: '/adhd-therapy' },
  { label: 'Therapy resources', href: '/resources' },
  { label: 'বাংলা', href: '/bn' },
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
        <div className="locationNav">
          <button className="siteNavLink" type="button" aria-haspopup="true">
            Locations <span aria-hidden="true">▾</span>
          </button>
          <div className="locationMenu">
            {locations.map((location) => (
              <Link href={location.href} key={location.href}>
                {location.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="locationNav">
          <button className="siteNavLink" type="button" aria-haspopup="true">
            Resources <span aria-hidden="true">▾</span>
          </button>
          <div className="locationMenu">
            {resources.map((resource) => (
              <Link href={resource.href} key={resource.href}>
                {resource.label}
              </Link>
            ))}
          </div>
        </div>
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
