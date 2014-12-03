# Helper methods defined here can be accessed in any controller or view in the application

module Fluvipp
  class App
    module BaseHelper
      def i18(key)
        I18n.t(key).html_safe
      end

      def navegation_bar(app=false)
        if app then "navbar-#{app}" else "navbar-transparent" end
      end
    end

    helpers BaseHelper
  end
end
