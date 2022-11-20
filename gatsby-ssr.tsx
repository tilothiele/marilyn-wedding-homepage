import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      (<link
        rel="preload"
        href="/fonts/aAutoSignature.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
        key="interFont"
      />),
      (<link
        rel="preload"
        href="/fonts/aAutoSignature.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
        key="interFont"
      />),
    ])
  }