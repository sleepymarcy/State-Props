const Selected = ({ book }) => (
    book ? (
        <p>Selected!</p>
    ) : (
        <p>No book selected</p>
    )
)

export default Selected