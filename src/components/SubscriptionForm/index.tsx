export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col">
            <label className="text-surface-alt" htmlFor="newsletter">inscreva-se em nosso e-mail</label>
            <input type="email" id="newsletter" name="newsleeter" placeholder="email@email.com"
                className="rounded-[30px] bg-white py-3 px-5" />
        </form>
    )
}