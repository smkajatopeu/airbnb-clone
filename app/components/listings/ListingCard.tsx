import { Listing, Reservation, User } from '@prisma/client'

import { SafeUser } from '@/app/types'

interface ListingCardProps {
	data: Listing
	reservation?: Reservation
	onAction?: (id: string) => void
	disabled?: boolean
	actionLabel?: string
	actionId?: string
	currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
	data,
	reservation,
	onAction,
	disabled,
	actionLabel,
	actionId,
	currentUser,
}) => {
	return <div>ListingCard</div>
}

export default ListingCard
