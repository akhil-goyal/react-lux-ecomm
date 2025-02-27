import { useEffect, useState } from "react";

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "short",
  ]);

  return <div>Sidebar</div>;
};

export default Sidebar;
