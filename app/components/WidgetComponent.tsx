
        import  { useEffect } from 'react';

        // Top Gainers Widget
       export const TopGainersTest = () => {
          useEffect(() => {
            const widgetId = '5bb2dedc-7f63-471e-8ba3-720dce6ecd62';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget')as HTMLIFrameElement | null;
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

        // Top Losers Widget
        export const TopLosersTest = () => {
          useEffect(() => {
            const widgetId = 'ef16ce06-fb80-4283-b886-d8f5c59a0395';
            const currentDomain = window.location.hostname;
            const currentPath = window.location.pathname;
            const iframe = document.getElementById('planify-widget')as HTMLIFrameElement | null;
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
        // Most Active Widget
        export const MostActiveValueTest = () => {
          useEffect(() => {
            const widgetId = '5947f6b1-5c58-4c6b-9b63-6d16d24ab779';
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
        