import { useSpring, animated } from '@react-spring/web';

const BouncingImage = ({ src, alt }: { src: string; alt: string }) => {
	const styles = useSpring({
		from: { transform: 'translateY(0px)' },
		to: [{ transform: 'translateY(-30px)' }, { transform: 'translateY(0px)' }],
		config: { duration: 500 },
		loop: true,
	});

	return (
		<animated.img
			src={src}
			alt={alt}
			className="object-cover object-center z-10"
			style={styles}
		/>
	);
};

export default BouncingImage;
