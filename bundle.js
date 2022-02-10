(function (React, ReactDOM) {
    'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    const width = 960;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeWidth = 10;
    const eyeOffsetX = 90;
    const eyeOffsetY = 70;
    const eyeRadius = 30;

    const App = () => (
        React.createElement( 'svg', { width: width, height: height },
        	React.createElement( 'circle', { 
            cx: centerX, cy: centerY, r: centerY - (strokeWidth / 2), fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),
        	React.createElement( 'circle', { 
            cx: centerX - eyeOffsetX, cy: centerY - eyeOffsetY, r: eyeRadius }),
          React.createElement( 'circle', { 
            cx: centerX + eyeOffsetX, cy: centerY - eyeOffsetY, r: eyeRadius })
        )
    );

    const rootElement = document.getElementById('root');
    ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbmNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuY29uc3Qgc3Ryb2tlV2lkdGggPSAxMDtcbmNvbnN0IGV5ZU9mZnNldFggPSA5MDtcbmNvbnN0IGV5ZU9mZnNldFkgPSA3MDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDMwO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICBcdDxjaXJjbGUgXG4gICAgICAgIGN4PXtjZW50ZXJYfVxuICAgICAgICBjeT17Y2VudGVyWX1cbiAgICAgICAgcj17Y2VudGVyWSAtIChzdHJva2VXaWR0aCAvIDIpfVxuICAgICAgICBmaWxsPVwieWVsbG93XCJcbiAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofVxuICAgICAgLz5cbiAgICBcdDxjaXJjbGUgXG4gICAgICAgIGN4PXtjZW50ZXJYIC0gZXllT2Zmc2V0WH1cbiAgICAgICAgY3k9e2NlbnRlclkgLSBleWVPZmZzZXRZfVxuICAgICAgICByPXtleWVSYWRpdXN9XG5cdFx0XHQvPlxuICAgICAgPGNpcmNsZSBcbiAgICAgICAgY3g9e2NlbnRlclggKyBleWVPZmZzZXRYfVxuICAgICAgICBjeT17Y2VudGVyWSAtIGV5ZU9mZnNldFl9XG4gICAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4pO1xuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgcm9vdEVsZW1lbnQpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ25CLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDckI7SUFDQSxNQUFNLEdBQUcsR0FBRztJQUNaLElBQUksOEJBQUssT0FBTyxLQUFNLEVBQUMsUUFBUTtJQUMvQixLQUFLO0lBQ0wsUUFBUSxJQUFJLE9BQVEsRUFDWixJQUFJLE9BQVEsRUFDWixHQUFHLE9BQU8sSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFFLEVBQy9CLE1BQUssUUFBUSxFQUNiLFFBQU8sT0FBTyxFQUNkLGdCQUFjLGFBQVk7SUFFbEMsS0FBSztJQUNMLFFBQVEsSUFBSSxPQUFPLEdBQUcsVUFBVyxFQUN6QixJQUFJLE9BQU8sR0FBRyxVQUFXLEVBQ3pCLEdBQUcsV0FBVTtJQUVyQixNQUFNO0lBQ04sUUFBUSxJQUFJLE9BQU8sR0FBRyxVQUFXLEVBQ3pCLElBQUksT0FBTyxHQUFHLFVBQVcsRUFDekIsR0FBRyxXQUFVLENBQ2I7SUFDUixLQUFVO0lBQ1YsQ0FBQyxDQUFDO0FBQ0Y7SUFDQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUMscUJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDOzs7OyJ9
