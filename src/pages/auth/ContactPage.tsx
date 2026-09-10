import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_EMBED,
  MAPS_URL,
  HOURS,
  DAY_NAMES,
  WEEK_ORDER,
  hhmm,
  ukNow,
  useOpenStatus,
} from '../pharmacyHours';
import '../HomePageDesktop.css';

const ContactPage: React.FC = () => {
  const status = useOpenStatus();
  const uk = ukNow();
  return (
    <div className="bg-light">
      <Header />

      <section className="cp-section cp-section-alt">
              <div className="cp-shell">
                <div className="cp-findcard">
                  <div className="cp-find-info">
                    <h2>Find us</h2>
                    <p className="cp-find-lead">
                      We're on Windmill Lane in the heart of Castlecroft. Walk in for advice,
                      or book ahead and we'll have a private consultation room ready.
                    </p>
      
                    <ul className="cp-contact">
                      <li>
                        <span className="cp-contact-ico"><FontAwesomeIcon icon={faLocationDot} /></span>
                        <div>
                          <strong>{ADDRESS_LINE_1}</strong>
                          <span>{ADDRESS_LINE_2}</span>
                        </div>
                      </li>
                      <li>
                        <span className="cp-contact-ico"><FontAwesomeIcon icon={faPhone} /></span>
                        <div>
                          <strong><a href={PHONE_TEL}>{PHONE_DISPLAY}</a></strong>
                          <span>Speak to the pharmacy team</span>
                        </div>
                      </li>
                      <li>
                        <span className="cp-contact-ico"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <div>
                          <strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></strong>
                          <span>We aim to reply the same working day</span>
                        </div>
                      </li>
                    </ul>
      
                    <div className="cp-hours">
                      <div className="cp-hours-top">
                        <h3>Opening hours</h3>
                        <span className={status.open ? 'cp-status' : 'cp-status is-closed'}>
                    <i />{status.open ? 'Open now' : 'Closed now'}
                  </span>

                      </div>
                      <ul>
                                        {WEEK_ORDER.map(d => {
                                          const h = HOURS[d];
                                          return (
                                            <li key={d} className={d === uk.day ? 'is-today' : ''}>
                                              <span>{DAY_NAMES[d]}</span>
                                              <span>{h ? `${hhmm(h[0])} – ${hhmm(h[1])}` : 'Closed'}</span>
                                            </li>
                                          );
                                        })}
                                      </ul>
                     
                    </div>
      
                    <div className="cp-find-actions">
                      <a className="cp-btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
                        Get directions <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                      <a className="cp-btn-ghost" href={PHONE_TEL}>Call the pharmacy</a>
                    </div>
                  </div>
      
                  <div className="cp-find-map">
                    <iframe
                      title="Castlecroft Pharmacy location"
                      src={MAPS_EMBED}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default ContactPage;
