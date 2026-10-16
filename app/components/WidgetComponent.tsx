'use client';
import React, { useEffect, useState } from 'react';

export const TopGainersTest = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/a9fb360e-0ac4-41d6-8910-d97480aaea08');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/a9fb360e-0ac4-41d6-8910-d97480aaea08?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

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
        href="https://bolt-test.planify.in/"
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/b1e77a13-8330-490b-a52d-d2edd896fde8');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/b1e77a13-8330-490b-a52d-d2edd896fde8?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

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
        href="https://bolt-test.planify.in/"
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

  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/ef01c237-c5aa-49ba-9697-837e904509c3');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/ef01c237-c5aa-49ba-9697-837e904509c3?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

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
        href="https://bolt-test.planify.in/"
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/a11856cc-766c-49b0-8e18-99980eb531a4');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/a11856cc-766c-49b0-8e18-99980eb531a4?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

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
        href="https://bolt-test.planify.in/"
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/414f7013-7455-4914-904c-035e45942cd4');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/414f7013-7455-4914-904c-035e45942cd4?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
    }
  }, []);

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
        href="https://bolt-test.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};