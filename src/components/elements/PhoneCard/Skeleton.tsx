import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={520}
    viewBox="0 0 270 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="0" ry="0" width="270" height="350" />
    <rect x="0" y="370" rx="0" ry="0" width="270" height="26" />
    <rect x="0" y="406" rx="0" ry="0" width="100" height="26" />
    <rect x="0" y="442" rx="0" ry="0" width="150" height="20" />
    <rect x="140" y="475" rx="0" ry="0" width="130" height="45" />
    <rect x="0" y="480" rx="0" ry="0" width="100" height="30" />
  </ContentLoader>
);
