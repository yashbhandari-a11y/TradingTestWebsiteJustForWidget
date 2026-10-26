'use client';
import React, { useEffect, useState } from 'react';

// Replaced the widget with the staging Widgets

export const TopGainersTest = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://staging.planify.in/widgets/14c20571-c860-47f2-8bd4-8b94944cbda5?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

  if (!src) return null;

  return (
    <div
      style={{
        position: 'relative',
        top: '0',
        zIndex: '20',
        height: '445px',
        width: '330px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="400px"
        frameBorder="0"
        title="planify tickers"
      ></iframe>
      <a
        href="https://staging.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};

// Top Losers Widget ==> Updated after changes done by satyam.
export const TopLosersTest = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://staging.planify.in/widgets/550bfaf7-6538-411e-9233-0f3ee17ea6fc?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

  if (!src) return null;

  return (
    <div
      style={{
        position: 'relative',
        top: '0',
        zIndex: '20',
        height: '445px',
        width: '330px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="400px"
        frameBorder="0"
        title="planify tickers"
      ></iframe>
      <a
        href="https://staging.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};


// Most Active Widget  ==> Updated after changes done by satyam.
export const MostActiveValueTest = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://staging.planify.in/widgets/3d2485e6-c018-4fcf-a9c1-e8e6e35c32c3?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

  if (!src) return null;

  return (
    <div
      style={{
        position: 'relative',
        top: '0',
        zIndex: '20',
        height: '445px',
        width: '330px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="400px"
        frameBorder="0"
        title="planify tickers"
      ></iframe>
      <a
        href="https://staging.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};

// Most Active Widget => After changes done by satyam.
export const MostActiveVolumeTest = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://staging.planify.in/widgets/a30bf300-45d9-4d6a-8126-c23260bb3c8c?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

  if (!src) return null;

  return (
    <div
      style={{
        position: 'relative',
        top: '0',
        zIndex: '20',
        height: '445px',
        width: '330px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="400px"
        frameBorder="0"
        title="planify tickers"
      ></iframe>
      <a
        href="https://staging.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};

// detailed Top Gainers Widget ==> Updated by the Satyam Pal
export const DetailedWidget = () => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://staging.planify.in/widgets/b237195a-c16a-4d7c-b565-13cb53d5e60f?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

  if (!src) return null;

  return (
    <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
      <iframe
        src={src}
        width="100%"
        height="614px"
        frameBorder="0"
        title="planify tickers"
      ></iframe>
      <a
        href="https://staging.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};