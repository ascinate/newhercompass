"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Navication from '../components/Navication';
import Footer from '../components/Footer';
import PricingBanner from '../components/PricingBanner';
import MobileMenus from '../components/MobileMenus';
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LogiModal';

export default function Support() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get(
                    `https://node-backend-1xs8.onrender.com/videos/list`
                );
                setVideos(res.data.videos || []);
            } catch (err) {
                console.error("Video fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            <Navication />
            <PricingBanner />

            <main className="float-start w-100 main-body position-relative">

                <section className="float-start w-100 choose-prats015 position-relative">
                    <div className="container">
                        <h2 className="main-heading body-main-heading text-center mb-4">
                            HerCompassAI Support Videos
                        </h2>
                        {loading && <p className="text-center mt-4">Loading videos...</p>}
                        {!loading && videos.length === 0 && (
                            <p className="text-center mt-4">No support videos available.</p>
                        )}

                        <div className="row mt-4">
                            {videos.map((video) => {
                                const hasUrl = !!video.video_url;
                                const hasFile = !!video.video_file;

                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={video.id}>
                                        <div className="video-card card shadow-lg border-0 rounded-4 h-100 overflow-hidden p-2">
                                            <div className="video-wrapper">
                                                {hasUrl && (
                                                    <div className="ratio ratio-16x9 mb-3 rounded-3 overflow-hidden border">
                                                        <iframe
                                                            src={video.video_url.replace("watch?v=", "embed/")}
                                                            title={video.title}
                                                            allowFullScreen
                                                            style={{ border: "0" }}
                                                        ></iframe>
                                                    </div>
                                                )}
                                                {!hasUrl && hasFile && (
                                                    <div className="ratio ratio-16x9 mb-2 rounded-3 overflow-hidden border">
                                                        <video controls className="w-100 h-100">
                                                            <source
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}${video.video_file}`}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-body pt-0">
                                                <h5 className="card-title fw-bold">{video.title}</h5>

                                                <p className="card-text text-muted mb-2">
                                                    <strong>Category:</strong> {video.category}
                                                </p>
                                                {hasUrl && (
                                                    <p className="mb-1">
                                                        <strong>YouTube URL:</strong><br />
                                                        <a
                                                            href={video.video_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary"
                                                        >
                                                            {video.video_url}
                                                        </a>
                                                    </p>
                                                )}
                                                {!hasUrl && hasFile && (
                                                    <p className="mb-0">
                                                        <strong>Video File:</strong><br />
                                                        <span className="text-secondary small">
                                                            {video.video_file.replace("/uploads/videos/", "")}
                                                        </span>
                                                    </p>
                                                )}

                                            </div>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                    </div>
                </section>


            </main>

            <Footer />
            <MobileMenus />
            <SignupModal />
            <LoginModal />
        </>
    );
}
