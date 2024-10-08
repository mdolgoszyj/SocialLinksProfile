import JPGAvatar from "./../assets/images/avatar-jessica.jpeg"

export default function ImgAvatar() {
    return (
        <div className="flex justify-center p-4">
            <img className="rounded-full w-1/3" src={JPGAvatar}/> 
        </div>
    )
  }