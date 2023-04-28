// components/LoadingPost.tsx
import Skeleton from "@mui/material/Skeleton";

const LoadingPost = () => {
  return (
    <div className="Card">
      <div className="Card--body">
        <Skeleton variant="text" width={210} height={40} />
        <Skeleton variant="text" />
      </div>
      <Skeleton variant="rectangular" width={100} height={40} />
    </div>
  );
};

export default LoadingPost;
