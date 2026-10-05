'use client';
import React, { useEffect, useState } from 'react';

// Top Gainers Widget ==> Updated after changes done by satyam.
//  export const TopGainersTest = () => {
//     useEffect(() => {
//       const widgetId = 'ef16ce06-fb80-4283-b886-d8f5c59a0395';
//       const currentDomain = window.location.hostname;
//       const currentPath = window.location.pathname;
//       const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
//       if (iframe) {
//         iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
//       }
//     }, []);

//     return (
//       <div
//         style={{
//         position: 'relative',
//         top: '0',
//         zIndex: '20',
//         height: '445px',
//         width: '330px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//         <iframe
//           id="planify-widget"
//           width="100%"
//           height="400px"
//           frameBorder="0"
//           title="planify tickers"
//         ></iframe>
//         <a
//           id="referral-link"
//           href="https://www.planify.in/"
//           style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
//           rel="nofollow"
//         >
//           Planify
//         </a>
//       </div>
//     );
//   };


export const TopGainersTest = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/d912abf9-45fc-41c3-9b47-3baa5c64ec48');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/d912abf9-45fc-41c3-9b47-3baa5c64ec48?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/c2c4376a-20c6-489f-a9ee-e7372ee21284');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/c2c4376a-20c6-489f-a9ee-e7372ee21284?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/89b0ee7f-dc3d-4d3e-bf18-e02f45284119');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/89b0ee7f-dc3d-4d3e-bf18-e02f45284119?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/1f92f685-8dfe-4e3e-b5a0-0be9c6a59c5a');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/1f92f685-8dfe-4e3e-b5a0-0be9c6a59c5a?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
export const DetailedTopGainers = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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

// detailed Top Losers Widget
export const DetailedTopLosers = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
// detailed Most Active volume Widget ==> Updated by the Satyam Pal

export const DetailedMostActiveVolume = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/380257fb-db11-46d2-84be-0ee373a78dc0');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/380257fb-db11-46d2-84be-0ee373a78dc0?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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

// detailed Most Active Value Widget

export const DetailedMostActiveValue = () => {
  const [src, setSrc] = useState('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://bolt-test.planify.in/widgets/1b8c6446-82ea-4ba8-a93a-45bf6a1e870f?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
