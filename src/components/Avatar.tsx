import imageDefault from "../assets/default/imageDefault";

interface CustomProps {
    avatar?: string | null;
    size: string; 
  }
  
  export default function AvatarUsuario({ avatar, size }: CustomProps) {
    const avatarSrc = avatar || {imageDefault}; 
  
    return (
      <img
        className="rounded-full"
        src={`data:image/jpeg;base64,${avatarSrc}`}
        alt="AvatarUser"
        style={{ width: size, height: size }}
      />
    );
  }