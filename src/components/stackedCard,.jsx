import { motion } from "framer-motion";

const StackedCard = ({ items, setItems, CardContent }) => {

  const handleSwipe = () => {
    setItems(prev => {
        const newArr = [...prev]
        const first = newArr.shift()
        newArr.push(first)

      return newArr;
    })
  }

  return (
    <>
        {items.map((card, index) => {
            const isTop = index === 0
            return (
                <motion.div
                    key={card.id}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                        if (!isTop) return

                        if(info.offset.x > 100){

                            handleSwipe("right")
                        }
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                        scale: 1 - index * 0.05,
                        x: index === 0 ? 0 : index * 15,
                        y: index * 5,
                        opacity: 1,
                        zIndex: 10 - index
                    }}
                    exit={{
                        x: 0,
                        opacity: 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-0 left-0 w-full h-full bg-black border border-white rounded-xl shadow-xl cursor-grab p-2 flex flex-col justify-center"
                >
                    {CardContent(card)}
                </motion.div>
            )
        })}
    </>
  );
};

export default StackedCard;