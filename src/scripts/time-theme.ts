// Time-based dark mode and color theme
// Auto-switches based on time of day

interface ThemeConfig {
    class: string;
    isDark: boolean;
    accent: string;
}

function getTimeBasedTheme(): ThemeConfig {
    const hour = new Date().getHours();

    // Morning: 6am - 12pm (fresh green)
    if (hour >= 6 && hour < 12) {
        return {
            class: 'time-morning',
            isDark: false,
            accent: 'morning-green'
        };
    }

    // Afternoon: 12pm - 5pm (sunset yellow)
    if (hour >= 12 && hour < 17) {
        return {
            class: 'time-afternoon',
            isDark: false,
            accent: 'sunset-yellow'
        };
    }

    // Evening: 5pm - 9pm (wine red)
    if (hour >= 17 && hour < 21) {
        return {
            class: 'time-evening',
            isDark: false,
            accent: 'evening-wine'
        };
    }

    // Night: 9pm - 6am (midnight blue + dark mode)
    return {
        class: 'time-night',
        isDark: true,
        accent: 'midnight-blue'
    };
}

function applyTimeTheme() {
    const theme = getTimeBasedTheme();
    const body = document.body;
    const html = document.documentElement;

    // Remove all time classes
    body.classList.remove('time-morning', 'time-afternoon', 'time-evening', 'time-night');

    // Add current time class
    body.classList.add(theme.class);

    // Apply dark mode if night
    if (theme.isDark) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    // Store theme for debugging
    localStorage.setItem('current-theme', JSON.stringify(theme));

    // Log to console (for dev)
    console.log(`🕐 Time theme applied: ${theme.class} (${theme.accent})`);
}

// Run on page load
applyTimeTheme();

// Update every 30 minutes
setInterval(applyTimeTheme, 30 * 60 * 1000);

// Also update on visibility change (when user comes back to tab)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        applyTimeTheme();
    }
});

// Manual dark mode toggle (optional)
export function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('manual-dark-mode', isDark.toString());
    return isDark;
}

// Check for manual override on load
const manualDarkMode = localStorage.getItem('manual-dark-mode');
if (manualDarkMode === 'true') {
    document.documentElement.classList.add('dark');
} else if (manualDarkMode === 'false') {
    document.documentElement.classList.remove('dark');
}

export { applyTimeTheme, getTimeBasedTheme };
