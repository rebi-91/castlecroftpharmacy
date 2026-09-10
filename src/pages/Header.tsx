// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Head.css';

// import ICON_PHONE from '../assets/phone.png';
// import ICON_HAMBURGER from '../assets/hamburger.png';
// import ICON_CLOSE from '../assets/close.png';
// import ICON_LOGO from '../assets/logo.png';

// /* ─── Inline SVG icons ───────────────────────────── */

// const ICON_CHEVRON_RIGHT = (
//   <svg
//     width="16"
//     height="16"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     viewBox="0 0 24 24"
//   >
//     <polyline points="9,18 15,12 9,6" />
//   </svg>
// );

// const ICON_BACK = (
//   <svg
//     width="18"
//     height="18"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     viewBox="0 0 24 24"
//   >
//     <polyline points="15,18 9,12 15,6" />
//   </svg>
// );

// /* ─── Menu Data ───────────────────────────── */

// const dropdownData: Record<string, string[]> = {
//   'Browse Services': [
//     'All Services',
//     'Travel Clinic',
//     'Private Treatments',
//     'NHS Treatments',
//     'Pharmacy First',
//   ],
//   'Weight Loss': ['Wegovy', 'Mounjaro'],
//   'Travel Vaccinations': [
//     'Chicken pox',
//     'Cholera (2 doses – special cases)',
//     'Dengue Fever',
//     'Diphtheria, Tetanus and Polio',
//     'Hepatitis A (2 doses)',
//     'Hepatitis B (3 doses)',
//     'HPV',
//     'Japanese Encephalitis',
//     'Meningitis ACWY (1 dose – for Hajj/Umrah)',
//     'Meningitis B',
//     'Rabies (3 doses)',
//     'Shingles (Zostavax)',
//     'Typhoid (1 dose or orally)',
//     'Yellow fever',
//   ],
// };

// const browseSubMenuData: Record<string, string[]> = {
//   'Private Treatments': [
//     'Microsuction Earwax Removal',
//     'Weight Loss Clinic',
//     'Private Flu Jab',
//     'Period Delay',
//     'Period Pain',
//     'Altitude sickness',
//     'Vitamin B12 Injection',
//     'Male Pattern Baldness (Androgenic Alopecia)',
//     'Erectile dysfunction',
//     'Traveller’s Diarrhoea',
//     'Female Hirsutism in Women',
//     'Jet Lag',
//     'Oral Thrush',
//     'Pain Relief (Naproxen)',
//     'Hay Fever (Fexofenadine or Dymista)',
//     'Uncomplicated UTI (Women)',
//   ],
//   'NHS Treatments': [
//     'Blood Pressure Check',
//     'Oral Contraception',
//     'Flu Vaccination',
//     'COVID-19 Vaccination',
//   ],
//   'Pharmacy First': [
//     'Sinusitis',
//     'Sore throat',
//     'Earache',
//     'Infected insect bite',
//     'Impetigo',
//     'Shingles',
//     'Uncomplicated UTI (Women)',
//   ],
// };

// const ROUTE_MAP: Record<string, string> = {
//   'All Services': '/services',
//   'Travel Clinic': '/book/3',
//   'Private Treatments': '/private-treatments',
//   'NHS Treatments': '/nhs-treatments',
//   'Pharmacy First': '/pharmacy-first',
//   Wegovy: '/wegovy',
//   Mounjaro: '/mounjaro',
//   Contact: '/contact',
//   Login: '/login',
//   'Emergency Supply': '/emergency-supply',
// };

// /* ─── Helpers ───────────────────────────── */

// function slugify(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/[()]/g, '')
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// }

// /* ─── Component ───────────────────────────── */

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [lvl1, setLvl1] = useState<string | null>(null);
//   const [lvl2, setLvl2] = useState<string | null>(null);

//   const nav = useNavigate();

//   const closeAll = () => {
//     setOpen(false);
//     setLvl1(null);
//     setLvl2(null);
//   };

//   const goTo = (label: string) => {
//     closeAll();

//     const route = ROUTE_MAP[label] ?? '/' + slugify(label);
//     nav(route);
//   };

//   return (
//     <header className="header-bar d-flex align-items-center">
//       {/* Logo */}
//       <Link to="/" onClick={closeAll}>
//         <img
//           src={ICON_LOGO}
//           alt="Coleshill Pharmacy"
//           className="header-logo"
//           style={{
//             display: 'block',
//             height: 52,
//             width: 'auto',
//             objectFit: 'contain',
//           }}
//         />
//       </Link>

//       {/* Phone */}
//       <a href="tel:01675466014" className="phone-link" aria-label="Call us">
//         <img
//           src={ICON_PHONE}
//           alt="Call us"
//           style={{
//             width: 24,
//             height: 24,
//             objectFit: 'contain',
//             display: 'block',
//           }}
//         />
//       </a>

//       <div className="flex-grow-1" />

//       {/* Hamburger / Close */}
//       <button
//         className="menu-button"
//         onClick={() => setOpen((prev) => !prev)}
//         aria-label={open ? 'Close menu' : 'Open menu'}
//         type="button"
//       >
//         <img
//           src={open ? ICON_CLOSE : ICON_HAMBURGER}
//           alt={open ? 'Close menu' : 'Open menu'}
//           style={{
//             width: 28,
//             height: 28,
//             objectFit: 'contain',
//             display: 'block',
//           }}
//         />
//       </button>

//       {/* Drawer */}
//       {open && (
//         <div className="drawer">
//           {/* Level 2 */}
//           {lvl2 && (
//             <ul className="list-unstyled px-3">
//               <li className="back" onClick={() => setLvl2(null)}>
//                 {ICON_BACK}
//                 <span className="ms-2">{lvl2}</span>
//               </li>

//               {browseSubMenuData[lvl2].map((item) => (
//                 <li
//                   key={item}
//                   className="item"
//                   onClick={() => goTo(item)}
//                 >
//                   <span>{item}</span>
//                   {ICON_CHEVRON_RIGHT}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Level 1 */}
//           {!lvl2 && lvl1 && (
//             <ul className="list-unstyled px-3">
//               <li className="back" onClick={() => setLvl1(null)}>
//                 {ICON_BACK}
//                 <span className="ms-2">{lvl1}</span>
//               </li>

//               {dropdownData[lvl1].map((item) => {
//                 const hasSub = !!browseSubMenuData[item];

//                 return (
//                   <li
//                     key={item}
//                     className="item"
//                     onClick={() =>
//                       hasSub ? setLvl2(item) : goTo(item)
//                     }
//                   >
//                     <span>{item}</span>
//                     {ICON_CHEVRON_RIGHT}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}

//           {/* Root */}
//           {!lvl1 && !lvl2 && (
//             <ul className="list-unstyled px-3">
//               {Object.keys(dropdownData).map((item) => (
//                 <li
//                   key={item}
//                   className="item root"
//                   onClick={() => setLvl1(item)}
//                 >
//                   <span>{item}</span>
//                   {ICON_CHEVRON_RIGHT}
//                 </li>
//               ))}

//               {[
//                 'Microsuction Earwax Removal',
//                 'Emergency Supply',
//                 'Contact',
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="item alt"
//                   onClick={() => goTo(item)}
//                 >
//                   {item}
//                 </li>
//               ))}

//               <li
//                 className="item alt1"
//                 onClick={() => goTo('Login')}
//               >
//                 Login
//               </li>
//             </ul>
//           )}
//         </div>
//       )}
//     </header>
//   );
// }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS_LINE_1,
  useOpenStatus,
} from './pharmacyHours';
import './Header.css';

const NAV_ITEMS: Array<{ label: string; to: string; caret?: boolean }> = [
  { label: 'Pharmacy Services', to: '/services?tab=ALL', caret: true },
  { label: 'Pharmacy First', to: '/services?tab=PHARMACY' },
  { label: 'NHS Services', to: '/services?tab=NHS' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const status = useOpenStatus();

  return (
    <>
      <div className="cp-utility">
        <div className="cp-shell">
          <span>
            <i className={status.open ? 'cp-open-dot' : 'cp-open-dot is-closed'} />
            {status.label}
          </span>
          <span className="cp-utility-sep" />
          <span>
            <strong>20+ NHS &amp; private services</strong>
            <span className="cp-utility-soft"> · same-day appointments, walk-ins welcome</span>
          </span>
          <span className="cp-utility-sep" />
          <span className="cp-utility-soft">
            <FontAwesomeIcon icon={faLocationDot} /> {ADDRESS_LINE_1} WV3 8HG
          </span>
        </div>
      </div>

      <header className="cp-header">
        <div className="cp-shell">
          <a className="cp-brand" href="/" onClick={e => { e.preventDefault(); navigate('/'); }}>
            <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
              <rect x="12" y="2" width="10" height="30" rx="4" fill="#00D364" />
              <rect x="2" y="12" width="30" height="10" rx="4" fill="#00D364" opacity="0.72" />
            </svg>
            Castlecroft Pharmacy
          </a>

          <nav className="cp-nav">
            {NAV_ITEMS.map(item => (
              <button key={item.label} onClick={() => navigate(item.to)}>
                {item.label}
                {item.caret && <FontAwesomeIcon icon={faChevronDown} />}
              </button>
            ))}
          </nav>

          <div className="cp-header-right">
            <a className="cp-phone" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            <button className="cp-book" onClick={() => navigate('/services?tab=ALL')}>
              Book Appointment
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
