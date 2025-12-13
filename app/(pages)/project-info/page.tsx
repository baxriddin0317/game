"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const ProjectInfoRedirectContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug") || "";
  const serverIdParam = searchParams.get("serverId");

  useEffect(() => {
    if (slug) {
      const search = serverIdParam ? `?serverId=${serverIdParam}` : "";
      router.replace(`/server/${slug}${search}`);
    }
  }, [router, slug, serverIdParam]);

  if (!slug) {
    return (
      <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl p-3 lg:p-4 mb-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-brand-primary-3 dark:text-white">
            Slug is required
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl p-3 lg:p-4 mb-4">
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    </div>
  );
};

const ProjectInfoRedirectLoadingFallback = () => {
  return (
    <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl p-3 lg:p-4 mb-4">
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    </div>
  );
};

const ProjectInfoRedirect = () => {
  return (
    <Suspense fallback={<ProjectInfoRedirectLoadingFallback />}>
      <ProjectInfoRedirectContent />
    </Suspense>
  );
};

export default ProjectInfoRedirect;
