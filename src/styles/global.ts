import { injectGlobal } from '@emotion/css';

injectGlobal`
  *, *::after, *::before {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html {
	  @media (max-width: 1000px) {
		  font-size: 93.75%;
	  }

	@media (max-width: 728px) {
		font-size: 87.5%;
	  }
  }

  button {
	  cursor: pointer;
    text-decoration: none;
    border: none;
  }

  [disabled] {
	  opacity: 0.6;
	  cursor: not-allowed;
  }

  input {
	  color: var(--text-body);
  }

  body{
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 ;
    font-size: 16px ;
  }

  p{
    font-weight: 400;
    font-size: 14px ;
  }
`;
