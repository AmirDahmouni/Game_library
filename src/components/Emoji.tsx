import { ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.png"
import thumbs from "../assets/thmubsUp.webp"
import meh from "../assets/thmubsUp.webp"
import { Image } from '@chakra-ui/react'

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: thumbs, alt: 'meh' },
    5: { src: bullsEye, alt: 'meh' }
  };

  return (<Image {...emojiMap[rating]} boxSize={25} />)
}

export default Emoji