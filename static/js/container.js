(function (dl, id) {
    window[dl] = window[dl] || [];
    const script = document.createElement('script'),
        params = dl !== 'dataLayer' ? '?l=' + dl : '';
    script.async = true;
    script.src = `https://tag.a.mts.ru/container/${id}/tag.js${params}`;
    document.head.appendChild(script);
})('dataLayer', '019a2a5d-3257-7285-acce-1ab5fe363b91');
