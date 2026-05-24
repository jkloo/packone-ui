import { AspectRatio, Paper, Image, AspectRatioProps } from '@mantine/core'
import classes from './CardImage.module.css'
import { CardFlattened } from '../../models/card-flattened'

interface CardImageProps extends AspectRatioProps, Omit<React.BaseHTMLAttributes<HTMLDivElement>, keyof AspectRatioProps> {
  // card: CardFlattened
  imageUrl: string|null
  foiling: string|null
  thickBorder?: boolean 
}

export function CardImage({imageUrl, foiling, thickBorder, ...other}: CardImageProps) {
  return (
    <AspectRatio ratio={25/35} mx="auto" {...other}>
    <Paper bg='gray' radius='md'>
    <Image
      fallbackSrc='https://placehold.co/250x350.PNG?text=%5B%20%5D'
      src={imageUrl}
      fit='contain'
      className={
        [
          thickBorder ? classes.thickBorder : undefined,
          foiling == 'R'
          ? classes.rainbowBox
          : foiling == 'C'
          ? classes.coldBox
          : foiling == 'G'
          ? classes.goldBox
          : undefined
        ].join(' ')
      }
    />
    </Paper>
    </AspectRatio>
  )
}