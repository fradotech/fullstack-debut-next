export type RouteType = {
  name: string;
  href: string;
  icon?: any;
  children?: RouteType[];
};