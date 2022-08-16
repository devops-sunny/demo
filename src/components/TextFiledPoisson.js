import { createTheme, ThemeProvider } from "@mui/material/styles";
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
    direction: "rtl"
});

const TextFiledPoisson = ({ children }) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div dir='rtl'>
                    {children}
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default TextFiledPoisson;