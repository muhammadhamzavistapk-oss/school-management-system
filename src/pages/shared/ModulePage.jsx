import { ArrowUpRight, Plus } from "lucide-react";

function ModulePage({ title, description, items = [], actionLabel = "Add New" }) {
    return (
        <div className="module-page">
            <div className="page-header">
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <button className="primary-button">
                    <Plus size={18} />
                    {actionLabel}
                </button>
            </div>

            <section className="module-card">
                <div className="module-card-header">
                    <div>
                        <h2>{title} Overview</h2>
                        <p>Manage your school&apos;s {title.toLowerCase()} from one place.</p>
                    </div>
                    <span className="module-count">{items.length} items</span>
                </div>

                {items.length > 0 ? (
                    <div className="module-list">
                        {items.map((item) => (
                            <div className="module-list-item" key={item.name}>
                                <div>
                                    <strong>{item.name}</strong>
                                    <span>{item.detail}</span>
                                </div>
                                <button className="module-action" aria-label={`Open ${item.name}`}>
                                    <ArrowUpRight size={17} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="module-empty">No {title.toLowerCase()} have been added yet.</div>
                )}
            </section>
        </div>
    );
}

export default ModulePage;