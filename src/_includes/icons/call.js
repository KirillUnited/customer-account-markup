module.exports = function callIcon(props) {
    const {className} = props;

    return `
<svg width="24" height="24" class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="call">
<path id="Vector" d="M17 20.9998C15.3463 20.9983 13.7183 20.5896 12.26 19.8098L11.81 19.5598C8.70075 17.8881 6.15169 15.339 4.48 12.2298L4.23 11.7798C3.42982 10.3131 3.00713 8.67047 3 6.99978V6.32978C2.99979 6.06586 3.05182 5.80452 3.15308 5.56081C3.25434 5.3171 3.40283 5.09583 3.59 4.90978L5.28 3.21978C5.36098 3.13817 5.45963 3.07627 5.56834 3.03886C5.67706 3.00145 5.79291 2.98954 5.90696 3.00403C6.02101 3.01853 6.1302 3.05905 6.22609 3.12247C6.32198 3.18589 6.40202 3.2705 6.46 3.36978L8.71 7.22978C8.82065 7.42083 8.86495 7.64314 8.83601 7.86202C8.80707 8.0809 8.7065 8.28404 8.55 8.43977L6.66 10.3298C6.58356 10.4054 6.53353 10.5036 6.51732 10.6099C6.5011 10.7162 6.51958 10.8248 6.57 10.9198L6.92 11.5798C8.17704 13.9082 10.0893 15.817 12.42 17.0698L13.08 17.4298C13.175 17.4802 13.2836 17.4987 13.3899 17.4825C13.4962 17.4662 13.5944 17.4162 13.67 17.3398L15.56 15.4498C15.7157 15.2933 15.9189 15.1927 16.1378 15.1638C16.3566 15.1348 16.5789 15.1791 16.77 15.2898L20.63 17.5398C20.7293 17.5978 20.8139 17.6778 20.8773 17.7737C20.9407 17.8696 20.9812 17.9788 20.9957 18.0928C21.0102 18.2069 20.9983 18.3227 20.9609 18.4314C20.9235 18.5401 20.8616 18.6388 20.78 18.7198L19.09 20.4098C18.9039 20.5969 18.6827 20.7454 18.439 20.8467C18.1953 20.948 17.9339 21 17.67 20.9998H17Z" fill="white"/>
</g>
</svg>
`
};
