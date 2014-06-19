(ns lt.objs.langs.julia.stats
  (:require [lt.objs.cache :as cache])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Hit mikeinn.es on boot

(def http (js/require "http"))

(defn hit [page]
  (.get http page))

(behavior ::metrics
          :triggers #{:init}
          :exclusive true
          :reaction #(hit (str "http://mikeinn.es/hit?id=" (@cache/settings :uid))))
