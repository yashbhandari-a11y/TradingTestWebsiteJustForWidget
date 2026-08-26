'use client';
      import React, { useEffect, useState } from 'react';

        // Top Gainers Widget
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
  const [src, setSrc] = useState('https://www.planify.in/widgets/5bb2dedc-7f63-471e-8ba3-720dce6ecd62');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentDomain = window.location.hostname;
      const currentPath = window.location.pathname;
      setSrc('https://www.planify.in/widgets/5bb2dedc-7f63-471e-8ba3-720dce6ecd62?d=' + encodeURIComponent(currentDomain) + '&p=' + encodeURIComponent(currentPath));
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
        href="https://www.planify.in/"
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
        rel="nofollow"
      >
        Planify
      </a>
    </div>
  );
};

        // Top Losers Widget
        export const TopLosersTest = () => {
          useEffect(() => {
            const widgetId = 'ef16ce06-fb80-4283-b886-d8f5c59a0395';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.bolt-test.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
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
            }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="400px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
        
        // Most Active Widget
        export const MostActiveValueTest = () => {
          
      
        };
        // Most Active Widget
        export const MostActiveVolumeTest = () => {
          useEffect(() => {
            const widgetId = 'ab7f6b17-82b3-4bfc-afbb-a6a61ef75af4';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
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
            }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="400px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
       // detailed Top Gainers Widget
       export const DetailedTopGainers = () => {
          useEffect(() => {
            const widgetId = '5376de45-b7ca-45c5-bbd7-6dc2d48ca291';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget')as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;
            }
          }, []);
        
          return (
            <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="614px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
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
          useEffect(() => {
            const widgetId = '5376de45-b7ca-45c5-bbd7-6dc2d48ca291';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget')as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="614px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        
       // detailed Most Active volume Widget

        export const DetailedMostActiveVolume = () => {
          useEffect(() => {
            const widgetId = '5376de45-b7ca-45c5-bbd7-6dc2d48ca291';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="614px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
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
          useEffect(() => {
            const widgetId = '5376de45-b7ca-45c5-bbd7-6dc2d48ca291';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget') as HTMLIFrameElement | null;
            if (iframe) {
              iframe.src = 'https://www.planify.in/widgets/' + widgetId + '?d=' + currentDomain + '&p=' + currentPath;;
            }
          }, []);
        
          return (
            <div style={{ position: 'relative', top: 0, zIndex: 20, width: '100%', minWidth: '1118px', height: '614px' }}>
              <iframe
                id="planify-widget"
                width="100%"
                height="614px"
                frameBorder="0"
                title="planify tickers"
              ></iframe>
              <a
                id="referral-link"
                href="https://www.planify.in/"
                style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden' }}
                rel="nofollow"
              >
                Planify
              </a>
            </div>
          );
        };
        