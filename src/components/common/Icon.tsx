import {
  Activity, ArrowLeft, ArrowRight, Award, CalendarDays, CheckCircle, ChevronDown,
  ClipboardCheck, Clock3, Compass, ExternalLink, Feather, GraduationCap, HandHeart,
  Heart, HelpCircle, Image as ImageIcon, Landmark, Lightbulb, Mail, MapPin, Menu,
  MessageCircle, Moon, Phone, PhoneCall, Shield, ShieldCheck, Sparkles, Sun, Trophy,
  Users, X,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const iconMap = {
  activity: Activity,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  award: Award,
  calendar: CalendarDays,
  "check-circle": CheckCircle,
  "chevron-down": ChevronDown,
  "clipboard-check": ClipboardCheck,
  clock: Clock3,
  compass: Compass,
  "external-link": ExternalLink,
  feather: Feather,
  "graduation-cap": GraduationCap,
  hands: HandHeart,
  heart: Heart,
  "help-circle": HelpCircle,
  image: ImageIcon,
  landmark: Landmark,
  lightbulb: Lightbulb,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  moon: Moon,
  phone: Phone,
  "phone-call": PhoneCall,
  shield: Shield,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  trophy: Trophy,
  users: Users,
  x: X,
};

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: LucideProps & { name: IconName }) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" {...props} />;
}
