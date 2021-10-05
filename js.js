
    var sites = [
        'pg_1.html',
        'pg_2.html',
        'pg_3.html',
        'pg_4.html',
        'pg_5.html',
        'pg_6.html',
        'pg_7.html',
        'pg_8.html',
        'pg_9.html',
        'pg_10.html',
        'pg_11.html'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }