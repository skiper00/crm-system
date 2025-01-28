export function getAvatarUrl(avatar: string | null | File | undefined): string {
	if (!avatar) {
		return "/assets/icons/DefaultImg.svg";
	}

	if (typeof avatar === "string") {

		if (avatar.startsWith("/uploads")) {
			return `${window.location.origin}${avatar}`;
		}
		return avatar;
	}

	if (avatar instanceof File) {
		return URL.createObjectURL(avatar);
	}

	return "/assets/icons/DefaultImg.svg";
}
