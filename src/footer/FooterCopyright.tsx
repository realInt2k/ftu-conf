const FooterCopyright = () => (
  <div className="footer-copyright">
    FTDS - FTU {new Date().getFullYear()} © {'Int2k'}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
