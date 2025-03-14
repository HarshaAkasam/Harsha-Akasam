document.addEventListener('DOMContentLoaded', function() {
    // Prevent infinite reload loop
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', 'true');
        location.reload();
    }

    // Initial profile data
    const profileData = {
        leetcode: {
            totalSolved: 106,
            easySolved: 61,
            mediumSolved: 41,
            hardSolved: 4,
            ranking: 604074,
            streak: 6
        },
        codechef: {
            totalSolved: 180,
            rating: 1471,
            streak: 6,
            stars: 2
        },
        gfg: {
            totalSolved: 82,
            score: 162,
            monthlySolved: 17,
            institutionRank: 100
        },
        hackerrank: {
            totalSolved: 175,
            badges: 7,
            streak: 6,
            Certifications : "JavaScript",
        }
    };

    const countElements = {
        leetcode: document.getElementById('leetcode-count'),
        codechef: document.getElementById('codechef-count'),
        gfg: document.getElementById('gfg-count'),
        hackerrank: document.getElementById('hackerrank-count')
    };
    
    const loaderElements = {
        leetcode: document.getElementById('leetcode-loader'),
        codechef: document.getElementById('codechef-loader'),
        gfg: document.getElementById('gfg-loader'),
        hackerrank: document.getElementById('hackerrank-loader')
    };
    
    const statsElements = {
        leetcode: document.getElementById('leetcode-stats'),
        codechef: document.getElementById('codechef-stats'),
        gfg: document.getElementById('gfg-stats'),
        hackerrank: document.getElementById('hackerrank-stats')
    };
    
    const updateTimeElement = document.getElementById('update-time');

    // Function to update UI with current data
    function updateUI() {
        if (loaderElements.leetcode) loaderElements.leetcode.style.display = 'none';
        if (countElements.leetcode) countElements.leetcode.textContent = profileData.leetcode.totalSolved;
        if (statsElements.leetcode) {
            statsElements.leetcode.innerHTML = `
                <div class="stat-item"><span>Easy:</span><span>${profileData.leetcode.easySolved}</span></div>
                <div class="stat-item"><span>Medium:</span><span>${profileData.leetcode.mediumSolved}</span></div>
                <div class="stat-item"><span>Hard:</span><span>${profileData.leetcode.hardSolved}</span></div>
            `;
        }
        
        if (loaderElements.codechef) loaderElements.codechef.style.display = 'none';
        if (countElements.codechef) countElements.codechef.textContent = profileData.codechef.totalSolved;
        if (statsElements.codechef) {
            statsElements.codechef.innerHTML = `
                <div class="stat-item"><span>Rating:</span><span>${profileData.codechef.rating}</span></div>
                 <div class="stat-item"><span>Streak:</span><span>${profileData.codechef.streak}</span></div>
                <div class="stat-item"><span>Stars:</span><span>${'★'.repeat(profileData.codechef.stars)}</span></div>
                
            `;
        }
        
        if (loaderElements.gfg) loaderElements.gfg.style.display = 'none';
        if (countElements.gfg) countElements.gfg.textContent = profileData.gfg.totalSolved;
        if (statsElements.gfg) {
            statsElements.gfg.innerHTML = `
                <div class="stat-item"><span>Institution Rank:</span><span>#${profileData.gfg.institutionRank.toLocaleString()}</span></div>
                <div class="stat-item"><span>Score:</span><span>${profileData.gfg.score}</span></div>
                <div class="stat-item"><span>Monthly Solved:</span><span>${profileData.gfg.monthlySolved}</span></div>
            `;
        }

        if (loaderElements.hackerrank) loaderElements.hackerrank.style.display = 'none';
        if (countElements.hackerrank) countElements.hackerrank.textContent = profileData.hackerrank.totalSolved;
        if (statsElements.hackerrank) {
            statsElements.hackerrank.innerHTML = `
                <div class="stat-item"><span>Badges:</span><span>${profileData.hackerrank.badges}</span></div>
                 <div class="stat-item"><span>Streak:</span><span>${profileData.hackerrank.streak}</span></div>
                 <div class="stat-item"><span>Certification:</span><span>${profileData.hackerrank.Certifications}</span></div>

            `;
        }
        
        const now = new Date();
        if (updateTimeElement) {
            updateTimeElement.textContent = `Last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        }
    }
    
    // Initialize dashboard
    updateUI();

    // Set up check interval (every hour)
    setInterval(() => {
        updateUI();
    }, 60 * 60 * 1000);     

    // Update count at 8 AM daily
    function scheduleDailyUpdate() {
        const now = new Date();
        const nextUpdate = new Date();
        nextUpdate.setHours(8, 0, 0, 0);
        if (now > nextUpdate) {
            nextUpdate.setDate(nextUpdate.getDate() + 1);
        }
        const timeUntilNextUpdate = nextUpdate - now;
        setTimeout(() => {
            profileData.leetcode.totalSolved += 2;
            profileData.codechef.totalSolved += 2;
            profileData.gfg.totalSolved += 2;
            profileData.hackerrank.totalSolved += 2;
            updateUI();
            setInterval(() => {
                profileData.leetcode.totalSolved += 2;
                profileData.codechef.totalSolved += 2;
                profileData.gfg.totalSolved += 2;
                profileData.hackerrank.totalSolved += 2;
                updateUI();
            }, 24 * 60 * 60 * 1000);
        }, timeUntilNextUpdate);
    }

    scheduleDailyUpdate();
});
