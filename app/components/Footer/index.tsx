import styles from "styled-components";
const AbaTedFooter = styles.footer`
  text-align:center;
`;

const Footer: React.FC = () => {
  return (<AbaTedFooter><p>AbaTed 2022™</p> <a href="https://vercel.com?utm_source=koseprogg&utm_campaign=oss"><img src="powered-by-vercel.svg" alt="Powered by ▲"/></a></AbaTedFooter>);
};

export default Footer;
