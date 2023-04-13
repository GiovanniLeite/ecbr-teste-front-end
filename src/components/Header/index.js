import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <nav id="navbar">
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
          <svg width="150" height="19" viewBox="0 0 150 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4727 15.9727C12.9727 16.6836 12.1875 17.2383 11.1172 17.6367C10.0547 18.0352 8.86328 18.2344 7.54297 18.2344C6.20703 18.2344 5.01953 17.9141 3.98047 17.2734C2.94141 16.6328 2.13672 15.7266 1.56641 14.5547C0.996094 13.3828 0.707031 12.0391 0.699219 10.5234V8.36719C0.699219 6 1.29688 4.13281 2.49219 2.76562C3.6875 1.39063 5.29297 0.703125 7.30859 0.703125C9.06641 0.703125 10.4805 1.15234 11.5508 2.05078C12.6211 2.94141 13.2578 4.17188 13.4609 5.74219H12.0195C11.8086 4.49219 11.2969 3.54688 10.4844 2.90625C9.67969 2.25781 8.625 1.93359 7.32031 1.93359C5.72656 1.93359 4.46484 2.5 3.53516 3.63281C2.60547 4.76562 2.14062 6.36328 2.14062 8.42578V10.4414C2.14062 11.7383 2.35938 12.8867 2.79688 13.8867C3.24219 14.8789 3.875 15.6484 4.69531 16.1953C5.52344 16.7422 6.47266 17.0156 7.54297 17.0156C8.78516 17.0156 9.85156 16.8203 10.7422 16.4297C11.3203 16.1719 11.75 15.8711 12.0312 15.5273V11.1211H7.44922V9.90234H13.4727V15.9727ZM25.2383 18C25.0977 17.6016 25.0078 17.0117 24.9688 16.2305C24.4766 16.8711 23.8477 17.3672 23.082 17.7188C22.3242 18.0625 21.5195 18.2344 20.668 18.2344C19.4492 18.2344 18.4609 17.8945 17.7031 17.2148C16.9531 16.5352 16.5781 15.6758 16.5781 14.6367C16.5781 13.4023 17.0898 12.4258 18.1133 11.707C19.1445 10.9883 20.5781 10.6289 22.4141 10.6289H24.957V9.1875C24.957 8.28125 24.6758 7.57031 24.1133 7.05469C23.5586 6.53125 22.7461 6.26953 21.6758 6.26953C20.6992 6.26953 19.8906 6.51953 19.25 7.01953C18.6094 7.51953 18.2891 8.12109 18.2891 8.82422L16.8828 8.8125C16.8828 7.80469 17.3516 6.93359 18.2891 6.19922C19.2266 5.45703 20.3789 5.08594 21.7461 5.08594C23.1602 5.08594 24.2734 5.44141 25.0859 6.15234C25.9062 6.85547 26.3281 7.83984 26.3516 9.10547V15.1055C26.3516 16.332 26.4805 17.25 26.7383 17.8594V18H25.2383ZM20.832 16.9922C21.7695 16.9922 22.6055 16.7656 23.3398 16.3125C24.082 15.8594 24.6211 15.2539 24.957 14.4961V11.707H22.4492C21.0508 11.7227 19.957 11.9805 19.168 12.4805C18.3789 12.9727 17.9844 13.6523 17.9844 14.5195C17.9844 15.2305 18.2461 15.8203 18.7695 16.2891C19.3008 16.7578 19.9883 16.9922 20.832 16.9922ZM31.3789 5.32031L31.4258 7.38281C31.8945 6.61719 32.4805 6.04297 33.1836 5.66016C33.8867 5.27734 34.668 5.08594 35.5273 5.08594C37.5273 5.08594 38.7969 5.90625 39.3359 7.54688C39.7891 6.75781 40.3945 6.15234 41.1523 5.73047C41.9102 5.30078 42.7461 5.08594 43.6602 5.08594C46.3789 5.08594 47.7656 6.57031 47.8203 9.53906V18H46.4141V9.64453C46.4062 8.51172 46.1602 7.67188 45.6758 7.125C45.1992 6.57812 44.418 6.30469 43.332 6.30469C42.3242 6.32031 41.4727 6.64844 40.7773 7.28906C40.082 7.92188 39.6953 8.69531 39.6172 9.60938V18H38.2109V9.53906C38.2031 8.45312 37.9453 7.64453 37.4375 7.11328C36.9375 6.57422 36.1641 6.30469 35.1172 6.30469C34.2344 6.30469 33.4766 6.55859 32.8438 7.06641C32.2109 7.56641 31.7422 8.3125 31.4375 9.30469V18H30.0312V5.32031H31.3789ZM56.293 18.2344C55.2148 18.2344 54.2383 17.9688 53.3633 17.4375C52.4961 16.9062 51.8203 16.168 51.3359 15.2227C50.8516 14.2695 50.6094 13.2031 50.6094 12.0234V11.5195C50.6094 10.3008 50.8438 9.20312 51.3125 8.22656C51.7891 7.25 52.4492 6.48438 53.293 5.92969C54.1367 5.36719 55.0508 5.08594 56.0352 5.08594C57.5742 5.08594 58.793 5.61328 59.6914 6.66797C60.5977 7.71484 61.0508 9.14844 61.0508 10.9688V11.7539H52.0039V12.0234C52.0039 13.4609 52.4141 14.6602 53.2344 15.6211C54.0625 16.5742 55.1016 17.0508 56.3516 17.0508C57.1016 17.0508 57.7617 16.9141 58.332 16.6406C58.9102 16.3672 59.4336 15.9297 59.9023 15.3281L60.7812 15.9961C59.75 17.4883 58.2539 18.2344 56.293 18.2344ZM56.0352 6.28125C54.9805 6.28125 54.0898 6.66797 53.3633 7.44141C52.6445 8.21484 52.207 9.25391 52.0508 10.5586H59.6562V10.4062C59.6172 9.1875 59.2695 8.19531 58.6133 7.42969C57.957 6.66406 57.0977 6.28125 56.0352 6.28125ZM81.5938 3.78516H76.3672V18H72.8516V3.78516H67.6953V0.9375H81.5938V3.78516ZM89.7383 8.49609C89.2773 8.43359 88.8711 8.40234 88.5195 8.40234C87.2383 8.40234 86.3984 8.83594 86 9.70312V18H82.6133V5.32031H85.8125L85.9062 6.83203C86.5859 5.66797 87.5273 5.08594 88.7305 5.08594C89.1055 5.08594 89.457 5.13672 89.7852 5.23828L89.7383 8.49609ZM98.375 18C98.2188 17.6953 98.1055 17.3164 98.0352 16.8633C97.2148 17.7773 96.1484 18.2344 94.8359 18.2344C93.5938 18.2344 92.5625 17.875 91.7422 17.1562C90.9297 16.4375 90.5234 15.5312 90.5234 14.4375C90.5234 13.0938 91.0195 12.0625 92.0117 11.3438C93.0117 10.625 94.4531 10.2617 96.3359 10.2539H97.8945V9.52734C97.8945 8.94141 97.7422 8.47266 97.4375 8.12109C97.1406 7.76953 96.668 7.59375 96.0195 7.59375C95.4492 7.59375 95 7.73047 94.6719 8.00391C94.3516 8.27734 94.1914 8.65234 94.1914 9.12891H90.8047C90.8047 8.39453 91.0312 7.71484 91.4844 7.08984C91.9375 6.46484 92.5781 5.97656 93.4062 5.625C94.2344 5.26562 95.1641 5.08594 96.1953 5.08594C97.7578 5.08594 98.9961 5.48047 99.9102 6.26953C100.832 7.05078 101.293 8.15234 101.293 9.57422V15.0703C101.301 16.2734 101.469 17.1836 101.797 17.8008V18H98.375ZM95.5742 15.6445C96.0742 15.6445 96.5352 15.5352 96.957 15.3164C97.3789 15.0898 97.6914 14.7891 97.8945 14.4141V12.2344H96.6289C94.9336 12.2344 94.0312 12.8203 93.9219 13.9922L93.9102 14.1914C93.9102 14.6133 94.0586 14.9609 94.3555 15.2344C94.6523 15.5078 95.0586 15.6445 95.5742 15.6445ZM109.168 15.5039C109.793 15.5039 110.301 15.332 110.691 14.9883C111.082 14.6445 111.285 14.1875 111.301 13.6172H114.477C114.469 14.4766 114.234 15.2656 113.773 15.9844C113.312 16.6953 112.68 17.25 111.875 17.6484C111.078 18.0391 110.195 18.2344 109.227 18.2344C107.414 18.2344 105.984 17.6602 104.938 16.5117C103.891 15.3555 103.367 13.7617 103.367 11.7305V11.5078C103.367 9.55469 103.887 7.99609 104.926 6.83203C105.965 5.66797 107.391 5.08594 109.203 5.08594C110.789 5.08594 112.059 5.53906 113.012 6.44531C113.973 7.34375 114.461 8.54297 114.477 10.043H111.301C111.285 9.38672 111.082 8.85547 110.691 8.44922C110.301 8.03516 109.785 7.82812 109.145 7.82812C108.355 7.82812 107.758 8.11719 107.352 8.69531C106.953 9.26562 106.754 10.1953 106.754 11.4844V11.8359C106.754 13.1406 106.953 14.0781 107.352 14.6484C107.75 15.2188 108.355 15.5039 109.168 15.5039ZM121.016 12.9141L119.797 14.1328V18H116.41V0H119.797V9.97266L120.453 9.12891L123.699 5.32031H127.766L123.184 10.6055L128.164 18H124.273L121.016 12.9141ZM134.832 18.2344C132.973 18.2344 131.457 17.6641 130.285 16.5234C129.121 15.3828 128.539 13.8633 128.539 11.9648V11.6367C128.539 10.3633 128.785 9.22656 129.277 8.22656C129.77 7.21875 130.465 6.44531 131.363 5.90625C132.27 5.35938 133.301 5.08594 134.457 5.08594C136.191 5.08594 137.555 5.63281 138.547 6.72656C139.547 7.82031 140.047 9.37109 140.047 11.3789V12.7617H131.973C132.082 13.5898 132.41 14.2539 132.957 14.7539C133.512 15.2539 134.211 15.5039 135.055 15.5039C136.359 15.5039 137.379 15.0312 138.113 14.0859L139.777 15.9492C139.27 16.668 138.582 17.2305 137.715 17.6367C136.848 18.0352 135.887 18.2344 134.832 18.2344ZM134.445 7.82812C133.773 7.82812 133.227 8.05469 132.805 8.50781C132.391 8.96094 132.125 9.60938 132.008 10.4531H136.719V10.1836C136.703 9.43359 136.5 8.85547 136.109 8.44922C135.719 8.03516 135.164 7.82812 134.445 7.82812ZM149.105 8.49609C148.645 8.43359 148.238 8.40234 147.887 8.40234C146.605 8.40234 145.766 8.83594 145.367 9.70312V18H141.98V5.32031H145.18L145.273 6.83203C145.953 5.66797 146.895 5.08594 148.098 5.08594C148.473 5.08594 148.824 5.13672 149.152 5.23828L149.105 8.49609Z"
              fill="white"
            />
          </svg>
        </Link>
      </nav>
    </Container>
  );
}
