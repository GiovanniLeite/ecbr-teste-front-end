import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="footerContent">
        <div className="logo">
          <Link to="/" title="Home">
            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.37479 2.44507L7.33505 0L0 6.1192L2.03958 8.56427L9.37479 2.44507ZM31.6625 6.12013L24.3273 0.00093174L22.2876 2.446L29.6228 8.5652L31.6625 6.12013ZM15.8313 3.48595C7.91883 3.48595 1.50287 9.90191 1.50287 17.8144C1.50287 25.7269 7.91883 32.1429 15.8313 32.1429C23.7438 32.1429 30.1598 25.7269 30.1598 17.8144C30.1598 9.90191 23.7438 3.48595 15.8313 3.48595ZM4.687 17.8144C4.687 23.9597 9.68603 28.9587 15.8313 28.9587C21.9767 28.9587 26.9757 23.9597 26.9757 17.8144C26.9757 11.6691 21.9767 6.67005 15.8313 6.67005C9.68603 6.67005 4.687 11.6691 4.687 17.8144Z"
                fill="white"
              />
              <path
                d="M23.3967 20.7349L22.5354 14.6823C22.3142 13.1258 20.9789 11.9721 19.4065 11.9721H12.2477C10.6753 11.9721 9.33992 13.1258 9.11868 14.6823L8.25742 20.7349C8.08359 21.9517 9.02386 23.0342 10.2486 23.0342C10.7859 23.0342 11.2916 22.8209 11.6709 22.4416L13.4566 20.6638H18.1975L19.9754 22.4416C20.3546 22.8209 20.8682 23.0342 21.3976 23.0342C22.6303 23.0342 23.5705 21.9517 23.3967 20.7349ZM15.0369 16.713H13.4566V18.2933H12.6665V16.713H11.0862V15.9229H12.6665V14.3426H13.4566V15.9229H15.0369V16.713ZM18.1975 15.9229C17.7629 15.9229 17.4074 15.5673 17.4074 15.1327C17.4074 14.6982 17.7629 14.3426 18.1975 14.3426C18.6321 14.3426 18.9877 14.6982 18.9877 15.1327C18.9877 15.5673 18.6321 15.9229 18.1975 15.9229ZM19.7778 18.2933C19.3432 18.2933 18.9877 17.9378 18.9877 17.5032C18.9877 17.0686 19.3432 16.713 19.7778 16.713C20.2124 16.713 20.568 17.0686 20.568 17.5032C20.568 17.9378 20.2124 18.2933 19.7778 18.2933Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <p>
          © 2021, Game Tracker Inc. Todos os direitos reservados. Nulla facilisi. Etiam sagittis congue tempor.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu
          velit et ante luctus egestas. Aenean sed nisi tellus. Duis non ornare libero. Quisque suscipit maximus nisi,
          in gravida felis. Cras ornare mauris ac nisi congue, ut condimentum sem tincidunt. Phasellus semper tellus
          malesuada turpis gravida cursus. Duis nec eleifend nunc, vitae finibus elit. Aliquam eget diam vitae purus
          suscipit viverra.
        </p>

        <div className="footerLinks">
          <Link to="/">Termos de Serviço</Link>
          <Link to="/">Política de Privacidade</Link>
          <Link to="/">Trabalhe conosco</Link>
          <Link to="/">Contato</Link>
        </div>
      </div>
    </Container>
  );
}
