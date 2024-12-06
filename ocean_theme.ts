import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const ocean_theme: CustomThemeConfig = {
    name: 'ocean_theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "var(--color-primary-50)",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "var(--color-primary-900)",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #023047
        "--color-primary-50": "217 224 227", // #d9e0e3
        "--color-primary-100": "204 214 218", // #ccd6da
        "--color-primary-200": "192 203 209", // #c0cbd1
        "--color-primary-300": "154 172 181", // #9aacb5
        "--color-primary-400": "78 110 126", // #4e6e7e
        "--color-primary-500": "2 48 71", // #023047
        "--color-primary-600": "2 43 64", // #022b40
        "--color-primary-700": "2 36 53", // #022435
        "--color-primary-800": "1 29 43", // #011d2b
        "--color-primary-900": "1 24 35", // #011823
        // secondary | #90e0ef
        "--color-secondary-50": "238 250 253", // #eefafd
        "--color-secondary-100": "233 249 252", // #e9f9fc
        "--color-secondary-200": "227 247 251", // #e3f7fb
        "--color-secondary-300": "211 243 249", // #d3f3f9
        "--color-secondary-400": "177 233 244", // #b1e9f4
        "--color-secondary-500": "144 224 239", // #90e0ef
        "--color-secondary-600": "130 202 215", // #82cad7
        "--color-secondary-700": "108 168 179", // #6ca8b3
        "--color-secondary-800": "86 134 143", // #56868f
        "--color-secondary-900": "71 110 117", // #476e75
        // tertiary | #EAB308
        "--color-tertiary-50": "252 244 218", // #fcf4da
        "--color-tertiary-100": "251 240 206", // #fbf0ce
        "--color-tertiary-200": "250 236 193", // #faecc1
        "--color-tertiary-300": "247 225 156", // #f7e19c
        "--color-tertiary-400": "240 202 82", // #f0ca52
        "--color-tertiary-500": "234 179 8", // #EAB308
        "--color-tertiary-600": "211 161 7", // #d3a107
        "--color-tertiary-700": "176 134 6", // #b08606
        "--color-tertiary-800": "140 107 5", // #8c6b05
        "--color-tertiary-900": "115 88 4", // #735804
        // success | #3bb590
        "--color-success-50": "226 244 238", // #e2f4ee
        "--color-success-100": "216 240 233", // #d8f0e9
        "--color-success-200": "206 237 227", // #ceede3
        "--color-success-300": "177 225 211", // #b1e1d3
        "--color-success-400": "118 203 177", // #76cbb1
        "--color-success-500": "59 181 144", // #3bb590
        "--color-success-600": "53 163 130", // #35a382
        "--color-success-700": "44 136 108", // #2c886c
        "--color-success-800": "35 109 86", // #236d56
        "--color-success-900": "29 89 71", // #1d5947
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #d2193e
        "--color-error-50": "248 221 226", // #f8dde2
        "--color-error-100": "246 209 216", // #f6d1d8
        "--color-error-200": "244 198 207", // #f4c6cf
        "--color-error-300": "237 163 178", // #eda3b2
        "--color-error-400": "224 94 120", // #e05e78
        "--color-error-500": "210 25 62", // #d2193e
        "--color-error-600": "189 23 56", // #bd1738
        "--color-error-700": "158 19 47", // #9e132f
        "--color-error-800": "126 15 37", // #7e0f25
        "--color-error-900": "103 12 30", // #670c1e
        // surface | #e9e8ed
        "--color-surface-50": "252 252 252", // #fcfcfc
        "--color-surface-100": "251 250 251", // #fbfafb
        "--color-surface-200": "250 249 251", // #faf9fb
        "--color-surface-300": "246 246 248", // #f6f6f8
        "--color-surface-400": "240 239 242", // #f0eff2
        "--color-surface-500": "233 232 237", // #e9e8ed
        "--color-surface-600": "210 209 213", // #d2d1d5
        "--color-surface-700": "175 174 178", // #afaeb2
        "--color-surface-800": "140 139 142", // #8c8b8e
        "--color-surface-900": "114 114 116", // #727274

    }
}