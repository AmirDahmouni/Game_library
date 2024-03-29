import { Card, Skeleton, SkeletonText, CardBody } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow='hidden'>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton