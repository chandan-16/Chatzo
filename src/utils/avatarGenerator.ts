export default function AvatarGenerator(text?: string){
    return `https://multiavatar.com/${text || "random"}.png`
    
}