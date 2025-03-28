"use client"

export function Video() {
  return     <video 
  autoPlay
  loop
  muted
  playsInline
  disablePictureInPicture
  disableRemotePlayback
  className="absolute top-0 left-0 w-full h-full object-cover opacity-25 pointer-events-none"
  onContextMenu={(e) => e.preventDefault()}
>
  <source src="/herovideo.mp4" type="video/mp4" />
</video>
}